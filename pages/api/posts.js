import { getSortedPostsData } from '../../lib/posts';

export default function handler(req, res) {
    const allPostsdata = getSortedPostsData();
    res.status(200).json({allPostsdata});
}