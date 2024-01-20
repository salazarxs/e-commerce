import * as jose from 'jose';

import dotenv from 'dotenv';
//const secretKey = process.env.JWT_TOKEN;
dotenv.config();

export const GenerateJWT = async () => {
    const alg = 'HS256';
    const secretKey = process.env.JWT_TOKEN;
    console.log(process.env)
    console.log(process.env.MYSQL_DB)
    console.log(secretKey)

    const jwt = await new jose.SignJWT({ 'urn:example:claim': true })
        .setProtectedHeader({ alg })
        .setIssuedAt()
        .setIssuer('urn:example:issuer')
        .setAudience('urn:example:audience')
        .setExpirationTime('2h')
        .sign(secretKey)

    console.log(jwt);
};
