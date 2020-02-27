package model;

import java.util.List;

import org.hibernate.*;
import org.hibernate.boot.MetadataSources;
import org.hibernate.boot.registry.*;

public class DAObject implements IYritysDAO {

	private SessionFactory istuntotehdas = null;
	private final StandardServiceRegistry registry;
	private Transaction trans = null;
	private Yritys[] yritykset;

	public DAObject() {
		registry = new StandardServiceRegistryBuilder().configure().build();
		try {
			istuntotehdas = new MetadataSources(registry).buildMetadata().buildSessionFactory();
		} catch (Exception e) {
			System.out.println("Oh no");
			StandardServiceRegistryBuilder.destroy(registry);
			e.printStackTrace();
		}
	}

	@Override
	public void closeSes() {
		istuntotehdas.close();
	}

	public boolean createYritys(Yritys yritys) {
		boolean asd;
		try (Session ses = istuntotehdas.openSession()) {
			trans = ses.beginTransaction();
			ses.saveOrUpdate(yritys);
			trans.commit();
			asd = true;
		} catch (Exception e) {
			if (trans != null)
				trans.rollback();
			asd = false;
			throw e;
		}

		return asd;
	}

	public Yritys readYritys(String yritysnimi) {
		Yritys yri;
		try (Session ses = istuntotehdas.openSession();) {
			ses.beginTransaction();
			yri = new Yritys();
			ses.load(yri, yritysnimi);
			ses.getTransaction().commit();
		} catch (Exception e) {
			if (trans != null)
				trans.rollback();
			throw e;
		}
		return yri;
	}

	public Yritys[] readYritykset() {
		List result;
		try (Session ses = istuntotehdas.openSession();) {
			trans = ses.beginTransaction();
			result = ses.createQuery("FROM Yritys").list();
			yritykset = new Yritys[result.size()];
			for (int i = 0; i < result.size(); i++) {
				yritykset[i] = (Yritys) result.get(i);
			}
			ses.getTransaction().commit();
		} catch (Exception e) {
			throw e;
		}

		return yritykset;
	}

	public Yritys updateYritys(Yritys yritys) {
		try (Session ses = istuntotehdas.openSession()) {
			ses.beginTransaction();
			Yritys v = (Yritys) ses.get(Yritys.class, yritys.getYritysnimi());
			v.setYritysnumero(yritys.getYritysnumero());
			v.setTilinumero(yritys.getTilinumero());
			ses.getTransaction().commit();
			return v;
		} catch (Exception e) {
			if (trans != null)
				trans.rollback();
			throw e;
		}
	}

	public boolean deleteYritys(String yritysnimi) {
		try (Session ses = istuntotehdas.openSession()) {
			ses.beginTransaction();
			String s = "DELETE Yritys WHERE yritysnimi = :yritysnimi";
			Query que = ses.createQuery(s);
			que.setParameter("yritysnimi", yritysnimi);
			if (que.executeUpdate() > 0) {
				ses.getTransaction().commit();
				return true;
			} else {
				ses.getTransaction().commit();
				return false;
			}
		}
	}

	@Override
	public void deleteAll() {
		// TODO Auto-generated method stub

	}

	public boolean tarkistaYritys(String yritysnimi) {
		try (Session ses = istuntotehdas.openSession()) {
			ses.beginTransaction();
			if (ses.get(Yritys.class, yritysnimi) != null) {
				return true;
			} else {
				return false;
			}
		} catch (Exception e) {
			if (trans != null)
				trans.rollback();
			throw e;
		}
	}
}
