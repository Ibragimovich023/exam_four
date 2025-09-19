import {
  Injectable,
  CanActivate,
  ExecutionContext,
  ForbiddenException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ROLES_KEY } from 'src/common/decorator/role.decorator';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {


    //==================== role olsh keragni ====================
    const requiredRoles = this.reflector.getAllAndOverride<string[]>(
      ROLES_KEY,
      [context.getHandler(), context.getClass()],
    );

    //==================== Request user olshi ====================
    const req = context.switchToHttp().getRequest();

    if (
      requiredRoles.includes(req.user.role) ||
      (requiredRoles.includes('ID') && req.user?.id === req.params.id)
    ) {
      return true;
    } else {
      throw new ForbiddenException('Foydalanuvchiga ruxsat berilmagan');
    }
  }
}
