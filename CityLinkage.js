	
	/*
	 *  time        2017年5月5日12:05:11
	 *  writer      me
	 *  intro       城级联动的JS,此js是ajax请求数据库中的城市表,所以你得先有这个表,当然我们也准备的sql文件,你只需要导入这个sql文件即可进行调用
	 *  explain     此JS是通过ajax发送的,所以在使用之前请指定ajax中的url,并在该url中进行连接数据库查询并输出地址
	 *  notice      在该js中的$('#cid')中的cid是指省份下拉框的标识Id,可以根据你具体的进行修改
	 * 
	 */
	
$.ajax({
		url:'',
		data:{upid:0},
		type:'post',
		dataType:'json',
		success:function(mes){
			$(mes).each(function(){
				var op = $('<option value="'+$(this).attr('id')+'">'+$(this).attr('name')+'</option>');
				$('#cid').append(op);	
			});
		}
	});

	// 绑定change时间
	$('select').live('change',function(){
		// 获取选中的值
		var id = $(this).val();
		var ob = $(this);
		// 清除后面的创建好的select
		ob.nextAll('select').remove();	
		// 发送ajax
		$.ajax({
			url:'',
			data:{upid:id},
			type:'post',
			dataType:'json',
			success:function(mes){
				if(mes.length == 0){  // 如果服务器返回数据是空数组 直接返回
					return;
				}

				// 创建下拉框
				var sel = $('<select name="" id=""></select>');
				$(mes).each(function(){
					// 创建option选项
					var op  = $('<option value="'+$(this).attr('id')+'">'+$(this).attr('name')+'</option>')
					// 插入到下拉框中
					sel.append(op);
				});

				// 将创建好的sel插入到文档中
				$(ob).after(sel);	
			}
		});	
	});	