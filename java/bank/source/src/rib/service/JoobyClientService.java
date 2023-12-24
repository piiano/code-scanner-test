package rib.service;

import rib.service.mvc.RestController;
import rib.entity.Client;
import org.jooby.Jooby;
import org.jooby.json.Jackson;

import java.time.LocalDate;

public final class JoobyClientService extends Jooby {
  {
    use(new Jackson());

    use(RestController.class);

    use("/script/rest")
      .get(request -> Client.LUKE)
      .post(request -> new Client(
        //String id, String firstName, String lastName, long cnp, String email, Address address, String phoneNumber, CustomerAdvisors customerAdvisors, BankAccount bankAccount) {
        request.param("id").value(),
        request.param("firstName").value(),
        request.param("lastName").value(),
         12l,
          request.param("email").value(),
          null,
          request.param("phone").value(), 
          null,null)
      )
      .consumes("application/x-www-form-urlencoded")
      .produces("application/json");


     post("/user", ctx -> {
        String firstName = ctx.param("firstName").value();
        String lastName = ctx.param("lastName").value();
        String id = ctx.param("id").value();
        String phoneNumber = ctx.param("phoneNumber").value();
        String email = ctx.param("email").value();
        LocalDate date = LocalDate.now();
        Client user =new Client(id, firstName,lastName,12l, email, null, phoneNumber, null, null);
        System.out.println("aa"+user.getFirstName());
        return user;
      });
  }

  public static void main(String... args) {
    run(JoobyClientService::new, args);
  }
}
