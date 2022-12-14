import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { PasswordService } from "src/common/password.service";
import { IsNull, Not, Repository } from "typeorm";
import { Customer } from "./entities/customer.entity";
import { Staff } from "./entities/staff.entity";
import { User } from "./entities/user.entity";
import { CustomerPayload } from "./payloads/customer.payload";
import { StaffPayload } from "./payloads/staff.payload";
import { UserPayload } from "./payloads/user.payload";

@Injectable()
export class UserService {
    
    constructor(
        @InjectRepository(User) private userRepository: Repository<User>,
        @InjectRepository(Staff) private staffRepository: Repository<Staff>,
        @InjectRepository(Customer) private customerRepository: Repository<Customer>,
        private passwordService: PasswordService
    ) { }
    
    async createStaff(payload: StaffPayload): Promise<User> {

        let staff = new Staff();

        staff.email = payload.email;
        staff.firstName = payload.firstName;
        staff.lastName = payload.lastName;

        staff = await this.staffRepository.save(staff);

        return this.createUser(payload, staff);
    }

    async createCustomer(payload: CustomerPayload): Promise<User> {
        let customer = new Customer();

        customer.address = payload.address;
        customer.dob = payload.dob;
        customer.email = payload.email;
        customer.gender = payload.gender;
        customer.name = payload.name;
        customer.phone = payload.phone;

        customer = await this.customerRepository.save(customer);

        return this.createUser(payload, customer);
    }

    private async createUser(payload: UserPayload, staff: Staff): Promise<User>;
    private async createUser(payload: UserPayload, customer: Customer): Promise<User>;

    private async createUser(payload: UserPayload, profile: Staff | Customer): Promise<User> {
        let user = new User();
        user.username = payload.username;
        user.password = await this.passwordService.encrypt(payload.password);
        
        if (profile instanceof Staff) {
            user.staff = profile;
        } else {
            user.customer = profile;
        }

        return this.userRepository.save(user);
    }
    
    lookup(username: string): Promise<User> {
        return this.userRepository.findOneBy({ username });
    }

    get(id: number, profile = false): Promise<User> {
        return this.userRepository.findOne({
            where: { id },
            relations: profile ? ["staff", "customer"] : []
        });
    }

    async isStaff(id: number): Promise<boolean> {
        return (await this.userRepository.countBy({ id, staff: Not(IsNull()) })) > 0;
    }

    async isCustomer(id: number): Promise<boolean> {
        return (await this.userRepository.countBy({ id, customer: Not(IsNull()) })) > 0;
    }
}