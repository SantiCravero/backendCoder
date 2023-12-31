import jwt from "jsonwebtoken";
import { findCartById } from "../services/cartService.js";
import { findProductById } from "../services/productService.js";
import { createTicket, returnLastCode } from "../services/ticketService.js";
import { sendTicketEmail } from "../utils/email.js";

export const createTicketAndSave = async (req, res) => {
    const cookie = req.cookies['userCookie']
    if (!cookie) {
        return res.status(404).json({ message: "Logued user not found" })
    }
    const purchaseProducts = [];

    const loguedUser = jwt.verify(cookie, process.env.SIGNED_COOKIE).user;

    const idCart = loguedUser.idCart;
    let totalCompra = 0;
    const cart = await findCartById(idCart)

    if (cart.products.length > 0) {
        let amount = 0;
        let productosSinStock = [];
        for (const cartProduct of cart.products) {
            const dataBaseProduct = await findProductById(cartProduct.productId)
            if (dataBaseProduct) {
                if (dataBaseProduct.stock >= cartProduct.quantity) {
                    amount += cartProduct.quantity;
                    dataBaseProduct.stock -= cartProduct.quantity;
                    purchaseProducts.push({ id: dataBaseProduct._id, product: dataBaseProduct.title, price: dataBaseProduct.price, quantity: cartProduct.quantity });
                    totalCompra += dataBaseProduct.price * cartProduct.quantity
                    await dataBaseProduct.save();
                } else {
                    productosSinStock.push(cartProduct.productId);
                }
            } else {
                const productosSinProcesar = cart.products;
                cart.products = [];
                await cart.save();
                
                return res.status(404).send({
                    message: "No existe el producto que está en el carrito, su carrito se vació", 
                    productosSinProcesar: productosSinProcesar
                })
                
            }
        }
        const lastCode = await returnLastCode();
        const nextCode = lastCode ? lastCode.code + 1 : 1;

        const ticket = await createTicket({
            code: nextCode,
            amount: amount,
            purchaser: loguedUser.email,
            products: purchaseProducts,
            total: totalCompra
        });
        cart.products = [];
        await cart.save();
        await sendTicketEmail(ticket)
        if (productosSinStock.length>0){
            return res.status(200).json({
                message: "Ticket generado, se vació el carrito, hay productos que no tienen stock", 
                ticket: ticket,
                productosSinStock: productosSinStock
            })
        }else{
            return res.status(200).json({
                message: "Ticket generado, se vació el carrito", 
                ticket: ticket
            })
        }
    } else {
        return res.status(404).json("El carrito está vacio")
    }

}