import * as jose from 'jose';


export const GenerateJWT = async (user) => {
    const alg = 'HS256';
    const secretKey = new TextEncoder().encode(process.env.JWT_TOKEN);


    const jwt = await new jose.SignJWT({ 'user': user })
        .setProtectedHeader({ alg })
        .setIssuedAt()
        .setIssuer('urn:example:issuer')
        .setAudience('urn:example:audience')
        .setExpirationTime('1h')
        .sign(secretKey)

    return jwt;
};
