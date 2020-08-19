package az.developia.shopping.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import az.developia.shopping.model.User;

@Component
public class UserDAO {
	@Autowired
	private DataSource dataSource;

	public boolean validate(User user) {
		boolean validated=false;
		Connection conn = null;
		try {
			conn = dataSource.getConnection();
			PreparedStatement st = conn.prepareStatement("select * from users where username=? and password=? and enabled=? ");
			st.setString(1, user.getUsername());
			st.setString(2, user.getPassword());
			st.setInt(3, 1);
			ResultSet rs =st.executeQuery();
			if (rs.next()) {
				validated=true;
			}
			rs.close();
			st.close();
		} catch (Exception exc) {
			exc.printStackTrace();
		} finally {
			if (conn != null) {
				try {
					conn.close();
				} catch (SQLException e) {

					e.printStackTrace();
				}
			}

	
		}
		return validated;
	}
	
	public void create(User user) {
	
		Connection conn = null;
		try {
			conn = dataSource.getConnection();
			PreparedStatement st = conn.prepareStatement("insert into users (username,password,enabled) values (?,?,?);");
			st.setString(1, user.getUsername());
			st.setString(2, "{noop}"+user.getPassword());
			st.setInt(3, 1);
		st.executeUpdate();
		
		
		st = conn.prepareStatement("insert into authorities (username,authority) values (?,?);");
		st.setString(1, user.getUsername());
		st.setString(2, "ROLE_ADMIN");
		st.executeUpdate();
			st.close();
		} catch (Exception exc) {
			exc.printStackTrace();
		} finally {
			if (conn != null) {
				try {
					conn.close();
				} catch (SQLException e) {

					e.printStackTrace();
				}
			}

	
		}
	}
	
	public boolean check(User user) {
		boolean exists=false;
		Connection conn = null;
		try {
			conn = dataSource.getConnection();
			PreparedStatement st = conn.prepareStatement("select * from users where username=? ");
			st.setString(1, user.getUsername());
			st.setString(2, user.getPassword());
			st.setInt(3, 1);
			ResultSet rs =st.executeQuery();
			if (rs.next()) {
				exists=true;
			}
			rs.close();
			st.close();
		} catch (Exception exc) {
			exc.printStackTrace();
		} finally {
			if (conn != null) {
				try {
					conn.close();
				} catch (SQLException e) {

					e.printStackTrace();
				}
			}

	
		}
		return exists;
	}
	
	
	
	

	
}
