angular.module("iLearn").controller("iLearnController", function($scope){
    $scope.title="iLearn";
    $scope.message = "Bem-vindos a nossa plataforma!";

    $scope.students = [
        {
            name: "Yanka Santos",
            phone: "819123456",
            address:"rua 2020, bairro Boa Vista, Recife-PE",
            dateAdmission:"01/11/2020"
        },
        {
            name: "Renato Lelis",
            phone: "819678901",
            address:"rua 2020, bairro Boa Vista, Recife-PE",
            dateAdmission:"02/11/2020"
        },
        {
            name: "Laine",
            phone: "819999000",
            address:"rua da indepêndencia, bairro Campo Grande, Florianópolis-SC",
            dateAdmission:"04/11/2020"
        }
    ];
    $scope.courses = [
        {
            title: "AngularJS",
            description: "Curso de introdução ao angular JS, aprendendo a fazer um CRUD",
            hours: "16 horas",
            price: "free" ,
            category: "Front-End"           
        },
        {
            title: "NodeJS",
            description: "Curso de introdução ao NodeJS, aprendendo a fazer um CRUD e consumo de API",
            hours: "40 horas",
            price: "R$30,00",
            category: "Back-End"               
        },
        {
            title: "Java Spring Boot",
            description: "Curso de Spring boot, integrando API com o front-end e gravando informação no banco de dados",
            hours: "40 horas",
            price: "R$60,00",
            category: "Back-End"                 
        }
    ];
    $scope.registerStudent = function(student){
        $scope.students.push(angular.copy(student));
        delete $scope.student;
    };
    $scope.deleteStudent = function(students){
        $scope.students = students.filter(
            function (student){
                if(!student.checked) return student;
            }
        );
    };
    $scope.isStudentChecked = function(students){
        return students.some(function(student){
            return student.checked;
        });
    };
});