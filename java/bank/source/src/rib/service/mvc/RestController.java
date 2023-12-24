/*
 * Copyright 2017 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package rib.service.mvc;

import org.jooby.mvc.*;

import rib.entity.Client;

import java.time.LocalDate;
import java.util.Optional;

@Path("/mvc/rest")
@Consumes("application/x-www-form-urlencoded")
@Produces("application/json")
public final class RestController {
  @GET
  public Client get() { return Client.LUKE; }

  @POST
  @SuppressWarnings("OptionalUsedAsFieldOrParameterType")
  public Client post(String id, String firstName, String lastName, String phone, String email) {
    return new Client(id, firstName,lastName,12l, email, null, phone, null, null);
  }
}
