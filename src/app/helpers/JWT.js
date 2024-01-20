import * as jose from 'jose';


const secretKey = process.env.JWT_TOKEN;
const alg = 'HS256';

export const GenerateJWT = async () => {
    const secretKey = process.env.JWT_TOKEN;
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
