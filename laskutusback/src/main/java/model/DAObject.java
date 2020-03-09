package model;

import java.util.List;

import org.hibernate.*;
import org.hibernate.boot.MetadataSources;
import org.hibernate.boot.registry.*;
import org.hibernate.criterion.Restrictions;

public class DAObject implements InfDAO {

	private SessionFactory istuntotehdas = null;
	private final StandardServiceRegistry registry;
	private Transaction trans = null;

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

	// check owner palauttaa yksittäisen yrityksen username. vertaa checkpermission
	// userapissa

	public boolean createYritys(Yritys yritys) {
		try (Session ses = istuntotehdas.openSession()) {
			trans = ses.beginTransaction();
			ses.saveOrUpdate(yritys);
			trans.commit();
			return true;
		} catch (Exception e) {
			if (trans != null)
				trans.rollback();
			throw e;
		}
	}

	public Yritys readYritys(String yritysnimi, String username) {
		Yritys[] yritykset;
		List result;
		Yritys x = null;
		;
		try (Session ses = istuntotehdas.openSession();) {
			trans = ses.beginTransaction();
			User usr = (User) ses.load(User.class, username);
			result = usr.getCustomers();
			yritykset = new Yritys[result.size()];
			for (int i = 0; i < result.size(); i++) {
				yritykset[i] = (Yritys) result.get(i);
			}
			ses.getTransaction().commit();
		} catch (Exception e) {
			throw e;
		}
		for (Yritys y : yritykset) {
			y.setUser(null);
		}
		for (int i = 0; i < yritykset.length; i++) {
			if (yritykset[i].getYritysnimi().toLowerCase().equals(yritysnimi.toLowerCase()))
				x = yritykset[i];
		}
		return x;
	}

	public Yritys[] readYritykset(String username) {
		Yritys[] yritykset;
		List result;
		try (Session ses = istuntotehdas.openSession();) {
			trans = ses.beginTransaction();
			User usr = (User) ses.get(User.class, username);
			result = usr.getCustomers();
			yritykset = new Yritys[result.size()];
			for (int i = 0; i < result.size(); i++) {
				yritykset[i] = (Yritys) result.get(i);
			}
			ses.getTransaction().commit();
		} catch (Exception e) {
			throw e;
		}
		for (Yritys y : yritykset) {
			y.setUser(null);
		}
		return yritykset;
	}

	public boolean updateYritys(Yritys yritys, String username) {
		Yritys[] yritykset;
		List result;
		try (Session ses = istuntotehdas.openSession()) {
			ses.beginTransaction();
			User usr = (User) ses.load(User.class, username);
			result = usr.getCustomers();
			yritykset = new Yritys[result.size()];
			for (int i = 0; i < result.size(); i++) {
				yritykset[i] = (Yritys) result.get(i);
			}
			for (int i = 0; i < result.size(); i++) {
				if (yritykset[i].getYritysnimi().toLowerCase().equals(yritys.getYritysnimi().toLowerCase())) {
					Yritys v = (Yritys) ses.get(Yritys.class, yritykset[i].getId());
					if (v != null) {
						v.setYtunnus(yritys.getYtunnus());
						v.setYhthlo(yritys.getYhthlo());
						v.setOsoite(yritys.getOsoite());
						v.setPostitoimipaikka(yritys.getPostitoimipaikka());
						v.setSposti(yritys.getSposti());
						ses.getTransaction().commit();
						return true;
					}
				}
			}
			ses.getTransaction().commit();
			return false;
		} catch (Exception e) {
			if (trans != null)
				trans.rollback();
			throw e;
		}
	}

	public boolean deleteYritys(String yritysnimi, String username) {
		Yritys[] yritykset;
		List result;
		try (Session ses = istuntotehdas.openSession()) {
			ses.beginTransaction();
			User usr = (User) ses.load(User.class, username);
			result = usr.getCustomers();
			yritykset = new Yritys[result.size()];
			for (int i = 0; i < result.size(); i++) {
				yritykset[i] = (Yritys) result.get(i);
			}
			for(int i=0;i<result.size();i++){
				if(yritykset[i].getYritysnimi().toLowerCase().equals(yritysnimi.toLowerCase())){
					ses.delete(yritykset[i]);
					trans.commit();
					return true;
				}
			}
			
			trans.rollback();
			return false;
			/*
			Yritys y = (Yritys) ses.createCriteria(Yritys.class).add(Restrictions.eq("yritysnimi", yritysnimi))
					.uniqueResult();
			if (y != null) {
				ses.delete(y);
				ses.getTransaction().commit();
				return true;
			} else {
				trans.rollback();
				return false;
			}
			*/
		} catch (Exception e) {
			if (trans != null)
				trans.rollback();
			throw e;
		}
	}

	public boolean checkYritys(String yritysnimi) {
		try (Session ses = istuntotehdas.openSession()) {
			ses.beginTransaction();
			Yritys y = (Yritys) ses.createCriteria(Yritys.class).add(Restrictions.eq("yritysnimi", yritysnimi))
					.uniqueResult();
			if (y != null) {
				ses.getTransaction().commit();
				return true;
			} else {
				ses.getTransaction().commit();
				return false;
			}
			/*
			 * if (ses.get(Yritys.class, yritysnimi) != null) {
			 * ses.getTransaction().commit(); return true; } else { return false; }
			 */
		} catch (Exception e) {
			if (trans != null)
				trans.rollback();
			throw e;
		}
	}

	@Override
	public boolean createUser(User user) {
		user.setPassword(user.getEncoded());
		try (Session ses = istuntotehdas.openSession()) {
			trans = ses.beginTransaction();
			ses.saveOrUpdate(user);
			trans.commit();
			return true;
		} catch (Exception e) {
			if (trans != null)
				trans.rollback();
			throw e;
		}
	}

	public User readUser(String username) {
		User uri;
		try (Session ses = istuntotehdas.openSession();) {
			ses.beginTransaction();
			uri = ses.get(User.class, username);
			ses.getTransaction().commit();
			return uri;
		} catch (Exception e) {
			if (trans != null)
				trans.rollback();
			throw e;
		}
	}

	@Override
	public boolean deleteUser(String username) {
		try (Session ses = istuntotehdas.openSession()) {
			ses.beginTransaction();
			String s = "DELETE User WHERE username = :username";
			Query que = ses.createQuery(s);
			que.setParameter("username", username);
			if (que.executeUpdate() > 0) {
				ses.getTransaction().commit();
				return true;
			} else {
				ses.getTransaction().commit();
				return false;
			}
		} catch (Exception e) {
			if (trans != null)
				trans.rollback();
			throw e;
		}
	}

	@Override
	public boolean checkUserAndPass(String username, String password) {
		try (Session ses = istuntotehdas.openSession()) {
			ses.beginTransaction();
			String s = "FROM User WHERE username = :username AND password = :password";
			Query que = ses.createQuery(s);
			que.setParameter("username", username).setParameter("password", password);
			if (que.uniqueResult() != null) {
				ses.getTransaction().commit();
				return true;
			} else {
				ses.getTransaction().commit();
				return false;
			}
		} catch (Exception e) {
			if (trans != null)
				trans.rollback();
			throw e;
		}
	}

	@Override
	public boolean checkUserExistence(String username) {
		try (Session ses = istuntotehdas.openSession()) {
			ses.beginTransaction();
			String s = "FROM User WHERE username = :username";
			Query que = ses.createQuery(s);
			que.setParameter("username", username);
			if (que.uniqueResult() != null) {
				ses.getTransaction().commit();
				return true;
			} else {
				ses.getTransaction().commit();
				return false;
			}
		} catch (Exception e) {
			if (trans != null)
				trans.rollback();
			throw e;
		}
	}

	@Override
	public boolean updateUser(User user) {
		try (Session ses = istuntotehdas.openSession()) {
			ses.beginTransaction();
			User u = (User) ses.get(User.class, user.getUsername());
			if (u != null) {
				u.setNimi(user.getNimi());
				u.setOsoite(user.getOsoite());
				u.setPostitoimipaikka(user.getPostitoimipaikka());
				u.setYtunnus(user.getYtunnus());
				u.setSposti(user.getSposti());
				u.setTilinro(user.getTilinro());
				ses.getTransaction().commit();
				return true;
			}
			return false;
		} catch (Exception e) {
			if (trans != null)
				trans.rollback();
			throw e;
		}
	}

	@Override
	public boolean createLasku(Lasku lasku, String username) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public Lasku readLasku(String laskunumero, String username) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Lasku[] readLaskut(String username) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Yritys updateLasku(Lasku lasku, String username) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public boolean deleteLasku(String laskunumero, String username) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public void deleteAll() {
		try (Session ses = istuntotehdas.openSession()) {
			ses.beginTransaction();
			String s = "DELETE User; DELETE Yritys; DELETE Lasku";
			Query que = ses.createQuery(s);
			que.executeUpdate();
			ses.getTransaction().commit();
		}
	}

}
