import { Injectable} from "@angular/core";

@Injectable()
export class CourseService {
    findAllCourses = () =>
        fetch('http://blackboardservice-env.eba-yen4pdmp.us-east-2.elasticbeanstalk.com/api/v1/courses')
        .then(response => response.json())
}
