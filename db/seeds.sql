INSERT INTO departments(department_name)
VALUES
("Management"),
("Engineering"),
("IT"),
("Finance"),
("HR"),
("Customer Support");

INSERT INTO roles (title, salary, department_id)
VALUES
("CEO", 450000, 001),
("President", 300000, 001),
("VP Finance", 250000, 004),
("Senior Engineer", 200000, 002),
("Junior Engineer", 120000, 002),
("Senior Tech Support", 110000, 003),
("Junior Tech Support", 85000, 003),
("Accounting", 90000, 004),
("HR Manager", 95000, 005),
("HR Assistant", 65000, 005),
("Head of Customer Relations", 90000, 006),
("Customer Support", 60000, 006);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
("David", "Gatzby", 01, null),
("Charlotte", "Webb", 02, 1),
("Garrett", "Thomson", 03, 1),
("Theresa", "Jones", 04, 2),
("Trey", "Williams", 05, 4),
("Ashley", "Franklin", 05, 4),
("Trevor", "Smith", 06, 2),
("Gayle", "Baker", 07, 7),
("Thomas", "Rodriguez", 08, 3),
("Patricia", "Stevenson", 09, 2),
("Danielle", "Johnston", 010, 10),
("Beverly", "Bellpepper", 011, 2),
("DJ", "Beepboop", 012, 12);

