var myApp = angular.module('myApp',[]);

function firstCtrl($scope) {
	$scope.show = { 
		hash: false, 
		dehash: false	
	};

	$scope.hash = function(string) 
	{
		if( string == '' || string == null || typeof string == 'undefined')
		{
			return false;
		}

		var h = 7,
			l = 'acdegilmnoprstuw';

		for(var i = 0; i < string.length; i++) 
		{
			h = (h * 37) + l.indexOf(string[i]);
		}

		$scope.show = { hash: true };

		return $scope.string = { hash: h };
	}

	$scope.dehash = function(num)
	{
		if( num == '' || num == null || typeof num == 'undefined')
		{
			return false;
		}

		$scope.show = { dehash: true };

		if( num > 9223372036854775807 )
		{
			return $scope.string = { dehash: 'number exceeds max int allowed' };
		}

		var h = 7,
			i = 0,
			j = '',
			l = 'acdegilmnoprstuw';

		while( num > 7 )
		{
			if( (num - i) % 37 == 0 )
			{
				num = (num - i)/37;
				j += l.substr(i,1);
				i = 0;
			}
			else 
			{
				i++;
			}
		}

		return $scope.string = { dehash: j.split('').reverse().join('') };
	}
}