
//马松
//function ajax(obj){
//	var method=obj.method||"get";       //访问方式
//	var url=obj.url;                    //地址
//	var dataType=obj.dataType||"text";  //数据类型
//	var asynch=obj.asynch==undefined?true:obj.asynch;    //异步
//	var success=obj.success;             //函数
//	var data="";                         //数据
//	//判断数据的类型
//	switch(typeof(obj.data)){
//		case "undefined": ;
//		break;
//		case "object":
//		for(var i in (obj.data)){
//			data+=i+"="+obj.data+"&";
//		}
//		data=data.slice(0,-1);
//		break;
//		case "string":
//		data=obj.data;
//		break;
//	}
//	//兼容
//	var ajax=window.XMLHttpRequest?new XMLHttpRequest():new ActiveXObject("Microsoft.XMLHTTP");
//	ajax.onreadystatechange=function(){
//		if(ajax.readyState==4){
//			if(ajax.status==200){
//				var result;       //判断数据类型
//				switch(dataType){ 
//					case "text":
//					result=ajax.responseText;
//					success(result);
//					break;
//					case "json":
//					result=eval("("+ajax.response+")");
//					success(result);
//					break;
//					case "xml":
//					result=ajax.responseXML;
//					success(result);
//					break;
//					case "document":
//					result=ajax.response;
//					success(result);
////					case "arraybuffer":
////                  case "bolb":
//				}
//			}else if(ajax.status==404){
//				alert("没有找到此页面！");
//			}else{
//				alert("访问出错！")
//			}
//		}
//	}	
////判断获取的方式
//	if(method=="get"){
//		ajax.open("get",url+"?"+data,asynch);
//		ajax.send();
//	}else if(method=="post"){
//		ajax.open("post",url,asynch);
//		ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
//		ajax.send(data);
//	}
//}


//岳英俊
//封装ajax
//parma  object
      //url   str【url】   要请求的地址
      //type  str【post，get】  要请求的方式
      //data  str【json，xml，text，document】     返回的数据类型
      //success   fn（callback） callback(e)
function ajax(obj){
	if(typeof obj!="object"){
	 	 console.log("请输入正确的格式！");
	 	 return false;
	 }
	 //参数初始化
	 var url=obj.url;
	 if(url==undefined){
	 	console.log("请指定请求地址！");
	 	return false;
	 }
	 var type=obj.type||"get";
	 var dataType=obj.dataType||"text";
	 var data=obj.data||"";
	 if(typeof data=="object"){
	 	var str="";
	 	for(var i in data){
	 		str+=i+"="+obj.data[i]+"&";   
	 	}
	 	data=str.slice(0,-1);
	 }
	 var asynch=obj.asynch==undefined?true:obj.asynch;
	 var ajaxobj=window.XMLHttpRequest?new XMLHttpRequest():new ActiveXObject("Microsoft.XMLHTTP");
	 if(type=="get"){
	 	ajaxobj.open(type,url+"?"+data,asynch);
	 	ajaxobj.responseType=dataType;
	 	ajaxobj.send();
	 	
	 }else if(type=="post"){
	 	ajaxobj.open(type,url,asynch);
	 	ajaxobj.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	 	ajaxobj.responseType=dataType;
	 	ajaxobj.send(data);
	 	
	 }
	 var success=obj.success;
	 ajaxobj.onreadystatechange=function(){
	 	if(ajaxobj.readyState==4){
	 		if(ajaxobj.status==200){
	 			   if(typeof result=="xml"){
	 					var result=ajaxobj.responseXML;
	 				}else{
	 					var result=ajaxobj.response;
	 				}
	 		       success(result);
	 		}else if(ajaxobj.status==404){
	 			alert("页面未找到！");
	 		}else if(ajaxobj.status==403){
	 			alert("禁止访问！");
	 		}
	 	}
	 }
}

