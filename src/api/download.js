export default async function GET(req , res){
    console.log("hi")
    console.log(req.query);
    res.status(200).json({message:"ok"})
}