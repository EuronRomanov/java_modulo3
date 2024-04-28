package com.krakedev.inventarios.bdd;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

import com.krakedev.inventarios.entidades.TipoDocumento;
import com.krakedev.inventarios.excepciones.KrakedevDevException;
import com.krakedev.inventarios.utils.ConexionBDD;



public class TipoDocumentoBDD {
	public ArrayList<TipoDocumento>recuperarTodos() throws KrakedevDevException {
		ArrayList<TipoDocumento> tipoDocumentos=new ArrayList<>();
		Connection con=null;
		PreparedStatement ps=null;
		ResultSet rs=null;
		TipoDocumento tipoDocumento=null;
		String proceidmientoSql="Select codigo_td, descripcion  from tipo_documento";
		try {
			con=ConexionBDD.obtenerConexion();
			 ps=con.prepareStatement(proceidmientoSql);
			rs= ps.executeQuery();
			while(rs.next()){
				String codigo=rs.getString("codigo_td");
				String nombre=rs.getString("descripcion");
				
				tipoDocumento=new TipoDocumento(codigo, nombre);
				
				tipoDocumentos.add(tipoDocumento);
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
		
		return tipoDocumentos;
	}
	
}
