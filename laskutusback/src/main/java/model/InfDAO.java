package model;

/**
 * Interface for DAObject
 */
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
	public abstract User readUser(String username);

	public abstract boolean createLasku(Invoice lasku);
	public abstract Invoice readLasku(String laskunumero, String username);
	public abstract Invoice[] readLaskut(String username);
	public abstract boolean deleteLasku(String laskunumero, String username);
	public abstract boolean checkLasku(String laskunumero);
}
