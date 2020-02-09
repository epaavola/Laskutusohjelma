package model;

public interface IYritysDAO {
	public abstract boolean createYritys(Yritys yritys);
	public abstract Yritys readYritys(String yritysnimi);
	public abstract Yritys[] readYritykset();
	public abstract boolean updateYritys(Yritys yritys);
	public abstract boolean deleteYritys(String yritysnimi);
	public abstract void closeSes();
}
