package com.krakedev.inventarios.bdd;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

import com.krakedev.inventarios.utils.ConexionBDD;
import com.krakedev.inventarios.entidades.Proveedor;
import com.krakedev.inventarios.excepciones.KrakedevDevException;



public class ProveedoresBDD {

	public ArrayList<Proveedor>buscar(String letra) throws KrakedevDevException {
		ArrayList<Proveedor> proveedores=new ArrayList<>();
		Connection con=null;
		PreparedStatement ps=null;
		ResultSet rs=null;
		Proveedor proveedor=null;
		String proceidmientoSql="Select identificador, tipo_documento, nombre, telefono, correo, direccion from proveedores where upper(nombre) like ?";
		try {
			con=ConexionBDD.obtenerConexion();
			 ps=con.prepareStatement(proceidmientoSql);
			 ps.setString(1, "%"+letra.toUpperCase()+"%");
			rs= ps.executeQuery();
			while(rs.next()){
				String identificador=rs.getString("identificador");
				String tipoDocumento=rs.getString("tipo_documento");
				String nombre=rs.getString("nombre");
				String telefono=rs.getString("telefono");
				String correo=rs.getString("correo");
				String direccion=rs.getString("direccion");
				proveedor=new Proveedor(identificador, tipoDocumento, nombre, telefono, correo, direccion);
				
				proveedores.add(proveedor);
			}
			 
		} catch (KrakedevDevException e) {
			// TODO: handle exception
			e.printStackTrace();
			throw e;
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			throw new KrakedevDevException("Error de consulta Detalle "+e.getMessage());
		}
		
		return proveedores;
	}
}
