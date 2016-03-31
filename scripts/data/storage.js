//require

/*存储和读取sessionStorage
 *storage.setSession('key','value')
 *storage.getSession('key')
 *sessionStorage需要在服务环境下运行测试
*/
var storage={
	setSession:function(key,value){//存储
		return saveSessionStorage(key,value);
	},
	setLocal:function(key,value){
		return saveLocalStorage(key,value);
	},
	getSession:function(key){//读取
		return readFromSessionStorage(key)
	},
	getLocal:function(key){
		return readFromLocalStorage(key)
	}
}
//检测浏览器是否支持sessionStorage
function checkStorage(){
	return !!window.sessionStorage
}
//向session中存数据
function saveSessionStorage(key,value){
	if(checkStorage()){
		sessionStorage[key]=value;
	}else{
		return false;
	}
};
function saveLocalStorage(key,value){
	if(checkStorage()){
		localStorage[key]=value;
	}else{
		return false;
	}
};
//从session中读数据
function readFromSessionStorage(key){
	if(checkStorage() &&　sessionStorage[key]){
		return sessionStorage[key];
	}else{
		return false;
	}
};
function readFromLocalStorage(key){
	if(checkStorage() &&　sessionStorage[key]){
		return localStorage[key];
	}else{
		return false;
	}
};

//exports
module.exports = storage;