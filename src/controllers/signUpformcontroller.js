 const postSignUpForm = (req, res) => {
    console.log(req.body);

    const { username, email, password } = req.body;

    console.log(`Username: ${username}`);
    console.log(`Email: ${email}`);
    console.log(`Password: ${password}`);



    const userName = req.body.username;
    const userEmail = req.body.email;
    const userPassword = req.body.password;

    console.log(`Username: ${userName}`);
    console.log(`Email: ${userEmail}`);
    console.log(`Password: ${userPassword}`);

    res.render('signup', { username: userName, email: userEmail, password: userPassword });
    // res.send('Form submitted successfully');
}

export { postSignUpForm };