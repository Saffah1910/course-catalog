describe("courseCost function", function () {
    describe("calculate course cost & apply discount if applicable", function () {
        it("return R7850.00 if the course name is python", function () {
            // const startDate = new Date(startDateStr);
            // let courseCost = course.cost;
            const courses = {
                "p1": {
                    courseName: "Python",
                    cost: 7850.00
                },
                "p2": {
                    courseName: "Intro to PHP course",
                    cost: 8990.00
                },
                "r1": {
                    courseName: "Ruby on Rails intro",
                    cost: 5675.00
                }
            }
            assert.deepEqual( {
                courseName: "Python",
                cost: 7850.00
            }, courseCost(courses))

        })
        it("the user picks Ruby on Rails 21 May 2023`", function () {
            const cost = courseCost("r1", "2023-05-21");
            console.log(cost);
            assert.equal({
                "status": "success",
                "code": "r1",
                "description": "",
                "cost": "",
                "discount": "",
                "amountDue": ""
            }, courseCost(cost))




        })

        it("return Invalid code if the user does not enter the proper data", function () {

            // const course = courses[courseCode];
            assert.deepEqual({ status: 'Invalid code' }, courseCost (""))



        })
        it("return Invalid day if the user does not enter a proper date", function () {
            const day = Number(startDate.getDate());
            // const course = courses[courseCode];
            assert.deepEqual({ status: 'Invalid day' }, courseCost (day))



        })







    });



});