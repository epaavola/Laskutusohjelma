package model;

public interface IYritysDAO {
	public abstract boolean createYritys(Yritys yritys);
	public abstract Yritys readYritys(String yritysnimi);
	public abstract Yritys[] readYritykset();
	public abstract Yritys updateYritys(Yritys yritys);
	public abstract boolean deleteYritys(String yritysnimi);
	public abstract void deleteAll();
	public abstract void closeSes();
}
