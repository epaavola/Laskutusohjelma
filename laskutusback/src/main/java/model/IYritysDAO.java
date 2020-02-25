package model;


public interface IYritysDAO {
	public abstract boolean createYritys(Yritys yritys);
	public abstract Yritys readYritys(int id);
	public abstract Yritys[] readYritykset();
	public abstract boolean updateYritys(Yritys yritys);
	public abstract boolean deleteYritys(int id);
	public abstract void closeSes();
}
