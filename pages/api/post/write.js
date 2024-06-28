import { writePostData } from '../../../lib/posts';
import format from 'date-fns/format';

export default async function handler(req, res) {

    const { id, title, content } = req.body;

    try {
        await writePostData({
            id,
            title,
            content,
            date: format(new Date(), 'yyyy-MM-dd'),
        });
        res.status(200).json({ text: 'Hello' });

    } catch (error) {

        res.status(500).json({ error: `error ${error}` });
    }
}