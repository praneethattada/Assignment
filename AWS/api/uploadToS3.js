import AWS from 'aws-sdk';

const s3 = new AWS.S3();

export default async function handler(req, res) {
    const { fileName, fileContent } = req.body;  // Assuming fileContent is base64-encoded
    
    if (!fileName || !fileContent) {
        return res.status(400).json({ error: 'File name and content are required' });
    }
    
    const params = {
        Bucket: 'your-s3-bucket-name',  // Replace with your bucket name
        Key: fileName,
        Body: Buffer.from(fileContent, 'base64'),
        ContentType: 'application/pdf',  // Adjust for other content types if needed
    };
    
    try {
        await s3.putObject(params).promise();
        res.status(200).json({ message: 'File uploaded successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Error uploading file', details: error.message });
    }
}
