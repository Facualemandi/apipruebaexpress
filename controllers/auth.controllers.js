export const login = (req, res) => {
  console.log(req.body);
  res.json({ ok: true });
};

export const register = (req, res) => {
  console.log(req.body);
  res.json(req.body);
};
