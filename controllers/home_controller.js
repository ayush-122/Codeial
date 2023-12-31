const Post =require('../models/post');
const User =require('../models/user');
module.exports.home =  async function (req, res)
{
    //console.log(req.cookies);
    //res.cookie('user_id',25);
    try{
  const posts=  await Post.find({})
                          .populate({path: 'user'})
                          .populate({
                            path: 'comments',
                            populate: {
                                path: 'user'
                            }
                          })
                          .exec();
   
// posts.forEach(post => {
//     console.log("User for post:", post.user);
// });

const users =await User.find({});

    return res.render('home',{
        title:"Home | Interactify",
        posts:posts,
        all_users:users
    });
}
catch(error)
{
    console.error('Error during find all posts',error);
        return res.status(500).send('Internal server error');
}
}

module.exports.navigation =function(req ,res)
{
    return res.end('<h1>navigation bar is not built currently</h1>');
}