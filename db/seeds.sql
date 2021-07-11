INSERT INTO departments(id, department_name)
VALUES
(001, "Management"),
(002, "Engineering"),
(003, "IT"),
(004, "Finance"),
(005, "HR"),
(006, "Customer Support");

INSERT INTO roles (id, title, salary, department_id)
VALUES
(01, "CEO", 450000, 001),
(02, "President", 300000, 001),
(03, "VP Finance", 250000, 004),
(04, "Senior Engineer", 200000, 002),
(05, "Junior Engineer", 120000, 002),
(06, "Senior Tech Support", 110000, 003),
(07, "Junior Tech Support", 85000, 003),
(08, "Accounting", 90000, 004),
(09, "HR Manager", 95000, 005),
(010, "HR Assistant", 65000, 005),
(011, "Head of Customer Relations", 90000, 006),
(012, "Customer Support", 60000, 006);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES
(1, "David", "Gatzby", 01, null),
(2, "Charlotte", "Webb", 02, 1),
(3, "Garrett", "Thomson", 03, 1),
(4, "Theresa", "Jones", 04, 2),
(5, "Trey", "Williams", 05, 4),
(6, "Ashley", "Franklin", 05, 4),
(7, "Trevor", "Smith", 06, 2),
(8, "Gayle", "Baker", 07, 7),
(9, "Thomas", "Rodriguez", 08, 3),
(10, "Patricia", "Stevenson", 09, 2),
(11, "Danielle", "Johnston", 010, 10),
(12, "Beverly", "Bellpepper", 011, 2),
(13, "DJ", "Beepboop", 012, 12);

