import express from "express"
const app = express();
import cors from "cors"
import mongoose from "mongoose"
import path from "path"
const port = process.env.PORT || 5000;
import bcrypt from "bcrypt";
import logpass from './pass.js'
app.use(express.json());
app.use(cors());

//mongoose
mongoose.connect(
  `mongodb+srv://${logpass}@cluster0.0edds.mongodb.net/ForumDB?retryWrites=true&w=majority`,
  { useUnifiedTopology: true, useNewUrlParser: true,useFindAndModify:false }
);

//data schema and model

const Schema = mongoose.Schema;

const postSchema = new Schema({
  title: String,
  username: String,
  contents: String,
  comm: Array,
});
const userSchema = new Schema({
  username: String,
  password: String,
});

userSchema.methods.encryptPassword = (password) => {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(10), null);
};

userSchema.methods.validPassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

const Posts = mongoose.model("Posts", postSchema, "posty");
const Users = mongoose.model("Users", userSchema, "users");

//API ROUTES
app.get("/article", function (req, res) {
  Posts.find().then((posty) => res.json(posty));
});

app.post("/login", (req, res) => {
  console.log(req.body);
  Users.findOne({ username: req.body.username }, (err, users) => {
    if (err) console.log(err);
    if (users) {
      const { password } = users;
      if (bcrypt.compareSync(req.body.password, password)) {
        res.json(users.username);
      }
    }
  });
});

app.post("/register", (req, res) => {
  Users.findOne({ username: req.body.username }, (err, users) => {
    if (err) console.log(err);

    if (users) {
      res.status(404).send();
    } else {
      console.log(req.body);
      const newUser = new Users();
      newUser.username = req.body.username;
      newUser.password = newUser.encryptPassword(req.body.password);

      newUser.save((err) => {
        if (err) throw err;
        res.send();
      });
    }
  });
});

app.post("/addPost", (req, res) => {
  const newPost = new Posts();
  newPost.title = req.body.title;
  newPost.username = req.body.author;
  newPost.contents = req.body.value;
  newPost.comm = [];
  newPost.save((err) => {
    if (err) throw err;
    res.send();
  });
});

app.post("/getPosts", function (req, res) {
  console.log(req.body.id);
  Posts.findById({ _id: req.body.id }, (err, post) => {
    if (err) console.log(err);
    if (post) {
      res.json(post);
    }
  });
});

app.post("/addComm", function (req, res) {
  console.log(req.body);
  const newComm = { author: req.body.author, text: req.body.text };
  Posts.findOneAndUpdate(
    {
      _id: req.body.id,
    },
    {
      $push: {
        comm: newComm,
      },
    }
  ).catch((error,affected,rest) => {
    console.log(error)
  });
  res.send();
});

app.listen(port, () => console.log(`Express is runing on port ${port}`));
