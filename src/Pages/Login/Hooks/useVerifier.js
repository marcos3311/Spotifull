export default function useVerifier() {
    let verifierCode = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    // Generate a 64-character random string
    for (let i = 0; i < 64; i++) {
        verifierCode += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return verifierCode;
};