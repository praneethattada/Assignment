export default function handler(req, res) {
    const { number1, number2 } = req.query;
    if (!number1 || !number2) {
        return res.status(400).json({ error: 'Both number1 and number2 are required' });
    }
    const result = parseFloat(number1) + parseFloat(number2);
    res.status(200).json({ result });
}
