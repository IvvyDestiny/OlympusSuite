const express    = require('express');
const bodyParser = require('body-parser');
const multer     = require('multer');
const low        = require('lowdb');
const FileSync   = require('lowdb/adapters/FileSync');
const path       = require('path');

const app = express();
const db  = low(new FileSync(path.join(__dirname,'/data/posts.json')));
db.defaults({ posts: [] }).write();

// configuração de upload de imagens
const upload = multer({ dest: path.join(__dirname,'/public/blog/imgs/') });

app.set('view engine','ejs');
app.set('views', path.join(__dirname,'/views'));
app.use(express.static(path.join(__dirname,'/public')));
app.use(bodyParser.urlencoded({ extended:true }));

// rota principal (lista de posts)
app.get('/', (req,res) => {
  const posts = db.get('posts').value();
  res.render('index', { posts });
});

// página de cada post
app.get('/post/:slug', (req,res) => {
  const post = db.get('posts').find({ slug: req.params.slug }).value();
  if (!post) return res.redirect('/');
  res.render('post', { post });
});

// painel de criação (GET)
app.get('/admin', (req,res) => {
  res.render('admin');
});

// recebe o form de criação (POST)
app.post('/admin', upload.array('sectionImgs'), (req,res) => {
  const { title, subtitle, slug, date } = req.body;
  // seções chegam como arrays de strings e arquivos
  const sections = req.body.secTitle.map((_, i) => ({
    id:      slug + '-sec' + i,
    title:   req.body.secTitle[i],
    paragraphs: req.body.secPara[i].split('\n'),
    img:     req.files[i] ? req.files[i].filename : '',
    alt:     req.body.secAlt[i]
  }));

  db.get('posts')
    .push({ title, subtitle, slug, date, sections, imgsPath: '/blog/imgs/', footerText: `© ${new Date().getFullYear()} DestinyServicesBR` })
    .write();

  res.redirect('/');
});

app.listen(3000, () => console.log('CMS rodando em http://localhost:3000'));