// const functions = require('firebase-functions');
// const admin=require('firebase-admin');
// var serviceAccount = require("./permission.json");
// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
//   databaseURL: "https://cloudfunctiondemo-d2104.firebaseio.com"
// });

const cors=require('cors');

const express=require('express');
const app=express();
const request = require('request');
const fs=require('fs');
const google=require('google')
const https=require('https')

// npm install @types/google


//const db=admin.firestore();

const tesseract=require('node-tesseract-ocr');
const config = {
    lang: "eng",
    oem: 1,
    psm: 3,
  }


app.use(cors({origin:true}));
app.use(express.json());
// app.post('/api/create',(req,res)=>{
//     (async ()=>{
//         try{
//             await db.collection('products').doc('/'+req.body.id+'/')
//             .create({
//                 name:req.body.name,
//                 price:req.body.price
//             })
//             return res.status(200).send('Inserted suceesfully');
//         }
//         catch(error)
//         {
//             console.log(error)
//             return res.status(500).send(error)
//         }

//     })();
// })

// app.post('/api/getAllData',(req,res)=>{
//     (async ()=>{
//         try
//         {
//             let query=db.collection('RegisterUser');
//             let response=[];
//             await query.get().then(querySnapshot=>{
//                 let docs=querySnapshot.docs;
//                 for(let doc of docs)
//                 {
//                     const item={
//                         phoneno:doc.id,

//                         name:doc.data().username
//                     };
//                     response.push(item)
//                 }
//                 return response;
//             })
//             return res.status(200).json(response);
//             // const document=db.collection('RegisterUser');
//             // let product=await document.get();
//             // let respons=product.data()
//             // return res.status(200).json(respons)
                               
//         }
//         catch(error)
//         {
//             console.log(error)
//             return res.status(500).json(error)
//         }

//     })();


// })

// app.post('/api/getRegister',(req,res)=>{
//     (async ()=>{
//         try{
//             await db.collection('RegisterUser').doc('/'+req.body.phoneno+'/')
//             .create({
//                 username:req.body.name,
//                 password:req.body.password
//             })
//             return res.status(200).send('Registered suceesfully');
//         }
//         catch(error)
//         {
//             console.log(error)
//             return res.status(500).send(error)
//         }

//     })();

// })

// app.post('/api/getLogin',(req,res)=>{
//     (async ()=>{
//         try
//         {
//             const document=db.collection('RegisterUser').doc(req.body.phoneno);
//             let product=await document.get();
//             let respons=product.data()
//             if(req.body.password===respons.password)
//             {
//                 return res.status(200).send({"status":"1","username":respons.username})
//             }
//             else
//             {
//                 return res.status(200).json({"status":"0"})
//             }
                     
//         }
//         catch(error)
//         {
//             console.log(error)
//             return res.status(500).json(error)
//         }

//     })();

// })



// app.post('/api/getData',(req,res)=>{
//     (async ()=>{
//         try
//         {
//             const document=db.collection('products').doc(req.body.id);
//             let product=await document.get();
//             let respons=product.data()
//             return res.status(200).json(respons.price)
            
//         }
//         catch(error)
//         {
//             console.log(error)
//             return res.status(500).json(error)
//         }

//     })();
// })

// app.post('/api/insChat',(req,res)=>{
//     var datetime = new Date();
//     (async ()=>{
//         try{
//             await db.collection('UserChat').doc()
//             .create({
//                 senderNo:req.body.senderNo,
//                 reciverNo:req.body.reciverNo,
//                 message:req.body.message,
//                 dateTime:datetime,
//                 readStatus:"0"
//             })
//             return res.status(200).send('Chat Recorded ......');
//         }
//         catch(error)
//         {
//             console.log(error)
//             return res.status(500).send(error)
//         }

//     })();

// })


// app.post('/api/demoChatCheck',(req,res)=>{
//     var datetime = new Date();
//     (async ()=>{
//         try{
//              await db.collection('UserChat').doc().collection(req.body.collectionId).doc()
//             .create({
//                 reciverNo:req.body.reciverNo,
//                 message:req.body.message,
//                 dateTime:datetime,
//                 readStatus:"0"
//             })
            
//             return res.status(200).send('Chat Recorded suceesfully');
//         }
//         catch(error)
//         {
//             console.log(error)
//             return res.status(500).send(error)
//         }
//     })();

// })



// app.post('/api/DemoGetChatData',(req,res)=>{
//     (async ()=>{
//         try
//         {
//             let query=db.collection('UserChat');
//             query=query.where("senderNo","==",req.body.senderNo);
//             query=query.where("reciverNo","==",req.body.reciverNo);
//             let response=[];
//             await query.get().then(querySnapshot=>{
//                 let docs=querySnapshot.docs;
//                 for(let doc of docs)
//                 {
//                         const item={
//                             message:doc.data().message,
//                             senderNo:doc.data().senderNo,
//                             reciverNo:doc.data().reciverNo,
//                             readStatus:doc.data().readStatus,
//                             datetime:doc.data().dateTime
//                         };
                                   
//                         response.push(item)
//                 }
//                 return response;
//             })
//             return res.status(200).json(response);
//             // const document=db.collection('RegisterUser');
//             // let product=await document.get();
//             // let respons=product.data()
//             // return res.status(200).json(respons)
                               
//         }
//         catch(error)
//         {
//             console.log(error)
//             return res.status(500).json(error)
//         }

//     })();
// })


// app.post('/api/getLastChat',(req,res)=>{
//     (async ()=>{
//         try
//         {
//             let query=db.collection('UserChat');
//             query=query.where("senderNo","==",req.body.senderNo);
//             query=query.where("reciverNo","==",req.body.reciverNo);
        
//             query=query.orderBy("dateTime","desc");
//             query=query.limit(1);
//             let response=[];
//             await query.get().then(querySnapshot=>{
//                 let docs=querySnapshot.docs;
//                 for(let doc of docs)
//                 {
//                         const item={
//                             message:doc.data().message,
//                             senderNo:doc.data().senderNo,
//                             reciverNo:doc.data().reciverNo,
//                             readStatus:doc.data().readStatus,
//                             datetime:doc.data().dateTime
//                         };
                                   
//                         response.push(item)
//                 }
//                 return response;
//             })
//             return res.status(200).json(response);
//             // const document=db.collection('RegisterUser');
//             // let product=await document.get();
//             // let respons=product.data()
//             // return res.status(200).json(respons)
                               
//         }
//         catch(error)
//         {
//             console.log(error)
//             return res.status(500).json(error)
//         }

//     })();
// })




// app.post('/api/getChatData',(req,res)=>{
//     (async ()=>{
//         try
//         {
//             const document=db.collection('UserChat').doc(req.body.senderNo);
            
//             let product=await document.get();
//             let respons=product.data()
                        
//             return res.status(200).json(respons)
          
                     
//         }
//         catch(error)
//         {
//             console.log(error)
//             return res.status(500).json(error)
//         }

//     })();
// })

app.post('/api/getText',async(req,res)=>{

    let file = fs.createWriteStream(`file.jpg`);
    /* Using Promises so that we can use the ASYNC AWAIT syntax */        
    await new Promise((resolve, reject) => {
        let stream = request({
            /* Here you should specify the exact link to the file you are trying to download */
            uri: req.body.imgUrl,
            headers: {
                'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
                'Accept-Encoding': 'gzip, deflate, br',
                'Accept-Language': 'en-US,en;q=0.9,fr;q=0.8,ro;q=0.7,ru;q=0.6,la;q=0.5,pt;q=0.4,de;q=0.3',
                'Cache-Control': 'max-age=0',
                'Connection': 'keep-alive',
                'Upgrade-Insecure-Requests': '1',
                'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.106 Safari/537.36'
            },
            /* GZIP true for most of the websites now, disable it if you don't need it */
            gzip: true
        })
        .pipe(file)
        .on('finish', () => {
            console.log(`The file is finished downloading.`);

            tesseract.recognize(file.path, config)
            .then(text => {
             console.log("Result:", text.replace(/(\r\n|\n|\r|\f)/gm, ""))
             return res.json(text);
            })
             .catch(error => {
                console.log(error.message)
                return res.json(error);
                })        


            
        })
        .on('error', (error) => {
            return res.json(error);
            
        })
    })
    .catch(error => {
        console.log(`Something happened: ${error}`);
    });
                        
  })


  app.post('/api/googleResult',(req,res)=>{

    console.log("called")
    let str=''
    let finalUrl='https://www.google.com/search?q='+req.body.keyword

    https.get(finalUrl,(resp)=>{
        resp.on('data',(chunk)=>{
            str+=chunk.toString()
        })
        resp.on('end',()=>{
            let tempResults=str.substring(str.indexOf('<!--SW_C_X-->'),str.length)       
    
            tempResults = tempResults.replace(/<(.|\n)*?>/g, '');
            var regex1 = /https/gi,
            result1,
            indices1 = [];
            let domains=['.com','.in','.org','.gov','.net','.int','.edu']
            while ((result1 = regex1.exec(tempResults))) {
                indices1.push(result1.index);
            }
        
            let tempLinks=[]
            for(let i=0;i<5;i++)
            {
                let temp=tempResults.substring(indices1[i],tempResults.length)
                let tempUrl=temp.substring(0,temp.indexOf('.com')+4)
                if(tempUrl.includes(req.body.keyword) || tempUrl.includes(req.body.keyword[0].toUpperCase()+req.body.keyword.slice(1)) || tempUrl.includes(req.body.keyword[0].toLowerCase()+req.body.keyword.slice(1)) ){
                    tempLinks.push(tempUrl)
                }
            }      
            tempResults=  tempResults.replace(/[^a-zA-Z ]/g, "")
            tempResults=tempResults.substring(0,2500)
            res.send({"result":tempResults,"links":tempLinks})
        })
    }).on('error',(err)=>{
        console.log(err)
    }) 
  })

app.listen(8080,(err)=>{
    if(err)
    {
        console.log("errore")
    }
    else
    {
    console.log("connecte")
    }
})

















// exports.app=functions.https.onRequest(app)











// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });


// exports.establishConnection=functions.https.onRequest((req,res)=>{
//     //  const uri = `mongodb+srv://${process.env.Devyani}:${process.env.devyani123}@main-03xkr.mongodb.net/main`;
//     // const uri = 'mongodb+srv://Devyani:devyani123@main-shard-00-00-03xkr.mongodb.net:27017,main-shard-00-01-03xkr.mongodb.net:27017,main-shard-00-02-03xkr.mongodb.net:27017/main?ssl=true&replicaSet=Main-shard-0&authSource=admin&retryWrites=true'

//     const uri='mongodb+srv://Devyani:devyani123@cluster0-iazxn.mongodb.net/test?retryWrites=true&w=majority';
   
//   //  const localURI = 'mongodb://localhost:27017/main';
//     cors(req,res,()=>{
//         // mongoose.connect('mongodb+srv://Devyani:devyani123@cluster0-iazxn.mongodb.net/test?retryWrites=true&w=majority');
//         mongoose.connect(uri)
//         mongoose.connection.on('error', function (error) {
//             console.log("An Error Occure while making Database connection", error);
//             res.status(500).json(error);
       
//         }).once('open', function (args) {
//             res.status(200).json("conneted sucesfully");
//         })
         
//     })
// });





