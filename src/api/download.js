import ytdl from "ytdl-core";
import fs from "fs"
export default async function GET(req , res){
    //console.log("hi")
    const link = req.query.link;
    if (!link) {
        return res.json({ message: "No URL" });
    }

    try {
        const videoId = await ytdl.getURLVideoID(link)
        console.log("video id : " , videoId)
        const metaInfo = await ytdl.getInfo(link)
        let data = {
            url: 'https://www.youtube.com/embed/'+videoId,
            info: metaInfo.formats
        }
        return res.send(data)
    } catch (error) {
        console.log(error)
        return res.json({message : "error"});
    }
   

    // ytdl.getInfo(link).then((info)=>{
    //     const format = ytdl.chooseFormat(info.formats,{quality:"248"});
    //     const outputFilePath = `${info.videoDetails.title}`;
    //     const outputStream = fs.createWriteStream(outputFilePath);
    //     ytdl.downloadFromInfo(info, { format: format }).pipe(outputStream);
    //     outputStream.on('finish', () => {
    //         console.log(`Finished downloading: ${outputFilePath}`);
    //       });
    // }).catch((err) => {
    //     console.error(err);
    //   })
}