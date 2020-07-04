		//creamos variables
		var listaProducto=[];
		var listaPrecio=[];
		var precioNewProd;
		var precioTotal=0;
		listaProducto=["Bolsa basura","Fruta","Leche","Olivas","Verdura"];
        listaPrecio=[1,2,1,3,4];
       
		//creamos funciones
		function funcionImprimeYcalc(){
			precioTotal=0;
			//borramos lo que tenga escrito cajaListaCompra
			document.getElementById("cajaListaCompra").innerHTML="";
			document.getElementById("cajaListaCompra").innerHTML="<hr>";
			//pintamos etiqueta, nombre del producto, precio y el boton para eliminar
			for(var i=0; i<listaProducto.length; i++){
				document.getElementById("cajaListaCompra").innerHTML+="<span id='cajaProducto"+i+"'>Producto Nº"+(i+1)+" <strong>"+listaProducto[i]+"</strong></span><span id='cajaPrecio"+i+"'> Precio:<strong>"+listaPrecio[i]+"</strong>€</span><button id='botonBorrar"+i+"' onclick='funcionBorrar("+i+")'><i class=\"fas fa-trash-alt\"></i></button><br>";
			}
			calculoTotal();

		}
		function calculoTotal(){
			precioTotal=0;
			for(var i=0; i<listaProducto.length; i++){
			precioTotal+=+listaPrecio[i];
			}
			document.getElementById("cajaListaCompra").innerHTML+="Total: <strong>"+precioTotal+"</strong> €";

		}
		function funcionBorrar(parametro){
			listaProducto.splice(parametro,1);
			listaPrecio.splice(parametro,1);
			funcionImprimeYcalc();
			console.log('PRODUCTO')
		}
		function funcionAddProducto(nombre, precio){
			listaProducto.push(nombre);
			listaPrecio.push(precio);
			funcionImprimeYcalc();
			document.getElementById("cajaNombreProducto").value="";
			document.getElementById("cajaPrecioProducto").value="";
			document.getElementById("cajaNombreProducto").focus();
        }
        window.onload = function(){
funcionImprimeYcalc
            ();

            document.getElementById("cajaBotonAniadir").onclick= function(){
				var nombreNew=document.getElementById("cajaNombreProducto").value;
				var precioNew=document.getElementById("cajaPrecioProducto").value;
				funcionAddProducto(nombreNew, precioNew);
           }

        }