const path = require('path');
const router = require('express').Router();
// sends notes to note html file to be directed onto the frontend
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/notes.html'));

});
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));

})
module.exports = router;