var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//     res.render('index', { title: 'Express' });
// });
router.get('/', (req, res, next) => {
    let data= {
        otherData: 'Something Else'
    };
    req.vueOptions= {
        head: {
            title: 'Page Title',
            metas: [
                { property:'og:title', content: 'Page Title'},
                { name:'twitter:title', content: 'Page Title'},
            ]
        }    
    }
    res.renderVue('main.vue', data, req.vueOptions);
})

router.post('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

module.exports = router;