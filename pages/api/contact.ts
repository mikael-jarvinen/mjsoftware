import { NextApiRequest, NextApiResponse } from 'next'
import * as nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST || 'smtp.mjsoftware.fi',
  port: parseInt(process.env.EMAIL_PORT || '465'),
  secure: (process.env.EMAIL_PORT || '465') === '465',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
} as { host?: string })

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const email = req.body.email
    const phoneNumber = req.body.phoneNumber
    const message = req.body.message

    transporter.sendMail({
      from: email,
      to: process.env.EMAIL_USER,
      subject: `MJWS Yhteydenottopyyntö ${phoneNumber}`,
      text: message,
    }, e => console.log(e?.message))
    transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Kiitos yhteydenottopyynnöstäsi!',
      text: 'Tämä on automaattisesti lähetetty sähköposti, joka ilmoittaa,että yhteydenottonne on tullut perille ja siihen vastataan mahdollisimman pian',
    }, e => console.log(e?.message))
    res.status(200).end()
  } else {
    res.status(404).end()
  }
}

export default handler