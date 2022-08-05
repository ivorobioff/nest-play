import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { PasswordService } from "src/common/password.service";
import { Repository } from "typeorm";
import { Customer, CustomerPayload } from "./customer.model";
import { Staff, StaffPayload } from "./staff.mode";
import { User } from "./user.model";

@Injectable()
export class UserService {
    
    constructor(
        @InjectRepository(User) private userRepository: Repository<User>,
        @InjectRepository(Staff) private staffRepository: Repository<Staff>,
        @InjectRepository(Customer) private customerRepository: Repository<Customer>,
        private passwordService: PasswordService
    ) { }
    
    async createStaff(payload: StaffPayload): Promise<void> {
        
    }

    async createCustomer(payload: CustomerPayload): Promise<void> {

    }

    async getCurrent(): Promise<User> {
        return this.userRepository.findOneBy({ id: 2 });
    }

    lookup(username: string): Promise<User> {
        return this.userRepository.findOneBy({ username });
    }
}