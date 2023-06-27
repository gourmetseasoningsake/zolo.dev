CREATE TABLE IF NOT EXISTS ProjectItems(
  id TEXT NOT NULL,
  repositoryId TEXT NOT NULL,
  title TEXT NOT NULL,
  issue TEXT,
  status TEXT,
  milestoneId TEXT,
  fulfillmentStart TEXT,
  fulfillmentTarget TEXT,
  charge TEXT,
  c10 REAL,
  c20 REAL,
  c30 REAL,
  c35 REAL,
  c40 REAL,
  c50 REAL,
  invoiceId TEXT,
  FOREIGN KEY(repositoryId) REFERENCES Repositories(Id)
  FOREIGN KEY(milestoneId) REFERENCES Milestones(id),
  FOREIGN KEY(invoiceId) REFERENCES Invoices(id),
  PRIMARY KEY(id)
);

CREATE TABLE IF NOT EXISTS Milestones(
  id TEXT NOT NULL,
  title TEXT NOT NULL,
  dueOn TEXT,
  PRIMARY KEY(id)
);

CREATE TABLE IF NOT EXISTS Repositories(
  id TEXT NOT NULL,
  name TEXT NOT NULL,
  url TEXT NOT NULL,
  PRIMARY KEY(id)
);

CREATE TABLE IF NOT EXISTS Collaborators(
  id INTEGER NOT NULL,
  login TEXT NOT NULL,
  name TEXT,
  avatarUrl TEXT,
  PRIMARY KEY(id)
);

CREATE TABLE IF NOT EXISTS RepositoriesCollaborators(
  repositoryId TEXT NOT NUll,
  collaboratorId INTEGER NOT NULL,
  PRIMARY KEY(repositoryId, collaboratorId)
);

CREATE TABLE IF NOT EXISTS Invoices(
  id TEXT NOT NULL,
  PRIMARY KEY(id)
);