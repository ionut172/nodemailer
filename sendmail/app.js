"use strict";
const nodemailer = require("nodemailer");

async function principal() {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  let contTest = await nodemailer.createTestAccount();

  let transport = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "ionutgabriel172@gmail.com",
      pass: "", // put your pass
    },
    tls: {
      ciphers: "SSLv3",
    },
  });

  // send mail with defined transport object
  let info = await transport.sendMail({
    from: '"Plesescu Ionut" <ionutgabriel172@gmail.com>',
    to: '"Plesescu Ionut" <ionut.plesescu@codezilla.ro>',
    subject: "Hello ✔",
    text: "Hello world?",
    html: `<!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width" />
        <title>JS Bin</title>
      </head>
      <body style="background-color: darkblue; margin: 0px; padding: 0px">
        <div
          style="
            display: flex;
            flex-direction: column;
            flex-wrap: wrap;
            justify-content: center;
            background-color: white;
            border: 1px solid white;
            border-bottom-left-radius: 10px;
            margin: 0px;
          "
          class="logoHeader"
        >
          <img
            style="width: 40%; height: auto; margin: auto"
            src="http://olympianparks.ro/wp-content/uploads/2022/10/300.png"
          />
        </div>
        <div class="imageSection">
          <img
            style="width: 100%; height: auto; margin: auto"
            src="https://www.proprietati-industriale.ro/images/osproperty/properties/63/medium/631553867888OlympianParkTimisoaraExterior1-29.03.2019.JPG"
          />
        </div>
        <div
          style="
            display: flex;
            flex-direction: column;
            flex-wrap: wrap;
            justify-content: center;
          "
          class="infoSection"
        >
          <h2
            style="
              color: white;
              margin: auto;
              font-size: 25px;
              text-align: center;
              margin-bottom: 20px;
            "
          >
            Olympian Bucharest North Park is oficially <br />
            under construction
          </h2>
          <p
            style="color: white; margin: auto; text-align: center; font-size: 20px"
          >
            Olympian Park Timisoara este un proiect modern de hale industriale cu
            spatii de depozitare amplasat pe un teren în suprafață totală de 137.000
            mp și are o suprafață totală construită de 40.500 mp incluzand spatii de
            producție, depozitare, spații de birouri si administrative. Atât
            spațiile industriale, cât si cele de birouri beneficiaza de standarde si
            dotări de clasa A, respectiv sistem de sprinklere, sistem de încălzire,
            detectoare si trape de fum, usi pentru acces auto, rampe de încărcare.
            Parcul are potential pentru extindere la cerere cu o suprafata maxima de
            10.000 mp, iar amenajările pot fi făcute conform standardelor
            dezvoltatorului, sau conform cerințelor chiriașului.
          </p>
          <button
            style="
              display: flex;
              flex-direction: column;
              flex-wrap: wrap;
              justify-content: center;
              align-items: center;
              background-clip: padding-box;
              background-color: #fa6400;
              border: 1px solid transparent;
              border-radius: 0.25rem;
              box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
              box-sizing: border-box;
              color: #fff;
              cursor: pointer;
              display: inline-flex;
              width: 20%;
              text-align: center;
              margin: auto;
              margin-top: 20px;
              margin-bottom: 20px;
            "
          >
            <a
              style="text-decoration: none"
              href="https://www.youtube.com/watch?v=Oe421EPjeBE"
              ><p style="color: white; margin: auto; font-size: 25px">
                Afla mai multe!
              </p></a
            >
          </button>
        </div>
        <div
          style="
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: center;
    
            margin: 10px;
          "
          class="containerCards"
        >
          <div
            style="
              display: flex;
              flex-direction: column;
              flex-wrap: wrap;
              justify-items: center;
              margin: 10px;
              background-color: darkgrey;
              border-radius: 10px;
            "
            class="card"
          >
            <img
              style="width: 100%; border-radius: 10px"
              src="https://www.economica.net/wp-content/uploads/2021/04/logistica-630x420.jpg"
            />
            <h2 style="text-align: center; font-size: 20px; color: white">
              Key locations
            </h2>
            <p style="text-align: center; color: white; font-size: 15px">
              Olympian Park Timisoara este un proiect modern de hale industriale cu
              spatii de depozitare amplasat pe un teren în suprafață totală de
              137.000 mp și are o suprafață totală construită de 40.500 mp incluzand
              spatii de producție, depozitare, spații de birouri si administrative.
              Atât spațiile industriale
            </p>
          </div>
          <div
            style="
              display: flex;
              flex-direction: column;
              flex-wrap: wrap;
              justify-items: center;
              margin: 10px;
              background-color: darkgrey;
              border-radius: 10px;
            "
            class="card"
          >
            <img
              style="width: 100%; border-radius: 10px"
              src="https://www.economica.net/wp-content/uploads/2021/04/logistica-630x420.jpg"
            />
            <h2 style="text-align: center; font-size: 20px; color: white">
              Key locations
            </h2>
            <p style="text-align: center; color: white; font-size: 15px">
              Olympian Park Timisoara este un proiect modern de hale industriale cu
              spatii de depozitare amplasat pe un teren în suprafață totală de
              137.000 mp și are o suprafață totală construită de 40.500 mp incluzand
              spatii de producție, depozitare, spații de birouri si administrative.
              Atât spațiile industriale
            </p>
          </div>
        </div>
        <div
          style="
            display: flex;
            flex-direction: column;
            flex-wrap: wrap;
            justify-content: center;
            background-color: rebeccapurple;
            margin: 20px;
            border-radius: 10px;
          "
          class="lastSection"
        >
          <h1 style="text-align: center; color: white">
            For more details, please contact us at:
          </h1>
          <h3 style="text-align: center; color: #fa6400">
            ines.cohal@olympianparks.com / 0751 194 060
          </h3>
          <h3 style="text-align: center; color: #fa6400">
            loredana.oprisa@olympianparks.com / 0720 289 199
          </h3>
        </div>
      </body>
    </html>
    `,
  });

  console.log("Message sent: %s", info.messageId);
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}

principal().catch(console.error);
