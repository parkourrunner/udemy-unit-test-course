import { DataBase } from "../../../app/server_app/data/DataBase";
import { UserCredentialsDataAccess } from "../../../app/server_app/data/UserCredentialsDataAccess";

const insertMock = jest.fn();
const getByMock = jest.fn();

jest.mock("../../../app/server_app/data/DataBase", () => {
  return {
    DataBase: jest.fn().mockImplementation(() => {
      return {
        insert: insertMock,
        getBy: getByMock,
      };
    }),
  };
});

describe("Test suite for UserCredentialsDataAccess", () => {
  let sut: UserCredentialsDataAccess;

  const someAccount = {
    id: "",
    password: "somePass",
    userName: "someuser",
  };

  const someId = "123";

  beforeEach(() => {
    sut = new UserCredentialsDataAccess();
    expect(DataBase).toHaveBeenCalledTimes(1);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should should add user and return id", async () => {
    insertMock.mockResolvedValueOnce(someId);

    const actualId = await sut.addUser(someAccount);
    expect(actualId).toBe(someId);
    expect(insertMock).toHaveBeenCalledWith(someAccount);
  });

  it("should should get user by id", async () => {
    getByMock.mockResolvedValueOnce(someAccount);

    const actualUser = await sut.getUserById(someId);
    
    expect(actualUser).toEqual(someAccount);
    expect(getByMock).toHaveBeenCalledWith("id", someId);
  });

  it("should should get user by name", async () => {
    getByMock.mockResolvedValueOnce(someAccount);

    const actualUser = await sut.getUserByUserName(someAccount.userName);

    expect(actualUser).toEqual(someAccount);
    expect(getByMock).toHaveBeenCalledWith("userName", someAccount.userName);
  });
});
