const handler = (req, res) => {
  // Get data submitted in request's body.
  const body = req.body;

  // Optional logging to see the responses
  // in the command line where next.js app is running.
  console.log("body: ", body);

  // Guard clause checks for first and last name,
  // and returns early if they are not found
  if (!body.username || !body.password) {
    // Sends a HTTP bad request error code
    return res.status(400).json({ data: "Username or Password not found" });
  }

  if (body.username !== "admin") {
    return res.status(500).json({ message: "Username is valid!" });
  } else if (body.password !== "admin") {
    return res.status(500).json({ message: "Password is valid!" });
  }
  // Sends a HTTP success code
  res.status(200).json({ message: `${body.username} ${body.password}` });
};

export default handler;
