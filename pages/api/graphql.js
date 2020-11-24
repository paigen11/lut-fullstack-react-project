// short way
export default (req, res) => {
  console.log('helloooo');
  const name = 'Paige';
  res.status(200).json({
    test: 'Hello world!',
  });
};

// long way
// export default (req, res) => {
//   res.setHeader('Content-Type', 'application/json');
//   res.statusCode = 200;
//   res.end(
//     JSON.stringify({
//       test: 'Hello world',
//     }),
//   );
// };
