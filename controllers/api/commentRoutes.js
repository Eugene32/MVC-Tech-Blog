const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

// Creates a comment
router.post("/", withAuth, async (req, res) => {
    try {
        if (req.session) {
            const newComment = await Comment.create({
                description: req.body.description,
                post_id: req.body.post_id,
                user_id: req.session.user_id,
            })
            res.status(200).json(newComment);
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

// Deletes a comment
router.delete("/:id", withAuth, async (req, res) => {
    try {
        const commentData = await Comment.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            },
        });

        if (!commentData) {
            res.status(404).json({ message: 'No comment for this post' });
            return;
        }

        res.status(200).json(commentData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;