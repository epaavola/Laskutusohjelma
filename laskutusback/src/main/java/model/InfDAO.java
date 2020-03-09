package model;

public interface InfDAO {
	public abstract boolean createYritys(Yritys yritys);
	public abstract Yritys readYritys(String yritysnimi, String username);
	public abstract Yritys[] readYritykset(String username);
	public abstract boolean updateYritys(Yritys yritys, String username);
	public abstract boolean deleteYritys(String yritysnimi, String username);
	public abstract boolean checkYritys(String yritysnimi);

	public abstract void deleteAll();
	public abstract void closeSes();

	public abstract boolean createUser(User user);
	public abstract boolean deleteUser(String username);
	public abstract boolean checkUserAndPass(String username, String password);
	public abstract boolean checkUserExistence(String username);
	public abstract boolean updateUser(User user);

	public abstract boolean createLasku(Lasku lasku, String username);
	public abstract Lasku readLasku(String laskunumero, String username);
	public abstract Lasku[] readLaskut(String username);
	public abstract Yritys updateLasku(Lasku lasku, String username);
	public abstract boolean deleteLasku(String laskunumero, String username);
}
