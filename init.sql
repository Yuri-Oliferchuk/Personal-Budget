CREATE TABLE budget_database (
  ID SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  quantity INTEGER NOT NULL
);

INSERT INTO budget_database (title, quantity)
VALUES  ('Operating expenses. Food, utilities, transportation, clothes, newspapers, cosmetics, etc.', 6000);

INSERT INTO budget_database (title, quantity)
VALUES  ('Retirement savings or for endowment life insurance.', 1000);

INSERT INTO budget_database (title, quantity)
VALUES  ('Long-term purchases and payments. It can also be used to pay current debts.', 1000);

INSERT INTO budget_database (title, quantity)
VALUES  ('Irregular expenses. They can be used, for example, to repair a breakdown in a car, treat a diseased tooth, etc.', 1000);

INSERT INTO budget_database (title, quantity)
VALUES  ('Entertainment.', 1000);

CREATE TABLE transaction (
  id SERIAL PRIMARY KEY,
  date timestamp,
  payment_amount INTEGER NOT NULL,
  payment_recipient INTEGER NOT NULL,
  envelope_id INTEGER REFERENCES budget_database(ID)
);